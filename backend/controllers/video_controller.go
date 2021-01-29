package controllers

import (
	"context"
	"fmt"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/pongsakorn-maker/video-on-demand/ent"
	"github.com/pongsakorn-maker/video-on-demand/ent/user"
	"github.com/pongsakorn-maker/video-on-demand/ent/video"
)

// VideoController defines the struct for the video controller
type VideoController struct {
	client *ent.Client
	router gin.IRouter
}

//Video struct
type Video struct {
	OwnerID     int
	Title       string
	Description string
	URL         string
	Imgsrc      string
	Timestamp   string
}

// CreateVideo handles POST requests for adding video entities
// @Summary Create video
// @Description Create video
// @ID create-video
// @Accept   json
// @Produce  json
// @Param video body ent.Video true "Video entity"
// @Success 200 {object} ent.Video
// @Failure 400 {object} gin.H
// @Failure 500 {object} gin.H
// @Router /videos [post]
func (ctl *VideoController) CreateVideo(c *gin.Context) {
	obj := Video{}
	if err := c.ShouldBind(&obj); err != nil {
		c.JSON(400, gin.H{
			"error": "video binding failed",
		})
		return
	}

	u, err := ctl.client.User.
		Query().
		Where(user.IDEQ(int(obj.OwnerID))).
		Only(context.Background())

	if err != nil {
		c.JSON(400, gin.H{
			"error": "user not found",
		})
		return
	}

	timestamp, err := time.Parse(time.RFC3339, obj.Timestamp)

	video, err := ctl.client.Video.
		Create().
		SetOwner(u).
		SetTitle(obj.Title).
		SetDescription(obj.Description).
		SetURL(obj.URL).
		SetImgurl(obj.Imgsrc).
		SetTimestamp(timestamp).
		Save(context.Background())
	if err != nil {
		c.JSON(400, gin.H{
			"error": "saving failed",
			"user":  u,
		})
		return
	}

	c.JSON(200, gin.H{
		"video": video,
		"user":  u,
	})
}

// GetVideo handles GET requests to retrieve a video entity
// @Summary Get a video entity by ID
// @Description get video by ID
// @ID get-video
// @Produce  json
// @Param id path int true "Video ID"
// @Success 200 {object} ent.Video
// @Failure 400 {object} gin.H
// @Failure 404 {object} gin.H
// @Failure 500 {object} gin.H
// @Router /videos/{id} [get]
func (ctl *VideoController) GetVideo(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(400, gin.H{
			"error": err.Error(),
		})
		return
	}

	video, err := ctl.client.Video.
		Query().
		Where(video.IDEQ(int(id))).
		Only(context.Background())
	if err != nil {
		c.JSON(404, gin.H{
			"error": err.Error(),
		})
		return
	}

	c.JSON(200, video)
}

// ListVideo handles request to get a list of video entities
// @Summary List video entities
// @Description list video entities
// @ID list-video
// @Produce json
// @Param limit  query int false "Limit"
// @Param offset query int false "Offset"
// @Success 200 {array} ent.Video
// @Failure 400 {object} gin.H
// @Failure 500 {object} gin.H
// @Router /videos [get]
func (ctl *VideoController) ListVideo(c *gin.Context) {
	limitQuery := c.Query("limit")
	limit := 10
	if limitQuery != "" {
		limit64, err := strconv.ParseInt(limitQuery, 10, 64)
		if err == nil {
			limit = int(limit64)
		}
	}

	offsetQuery := c.Query("offset")
	offset := 0
	if offsetQuery != "" {
		offset64, err := strconv.ParseInt(offsetQuery, 10, 64)
		if err == nil {
			offset = int(offset64)
		}
	}

	videos, err := ctl.client.Video.
		Query().
		Limit(limit).
		Offset(offset).
		All(context.Background())
	if err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, videos)
}

// DeleteVideo handles DELETE requests to delete a video entity
// @Summary Delete a video entity by ID
// @Description get video by ID
// @ID delete-video
// @Produce  json
// @Param id path int true "Video ID"
// @Success 200 {object} gin.H
// @Failure 400 {object} gin.H
// @Failure 404 {object} gin.H
// @Failure 500 {object} gin.H
// @Router /videos/{id} [delete]
func (ctl *VideoController) DeleteVideo(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(400, gin.H{
			"error": err.Error(),
		})
		return
	}

	err = ctl.client.Video.
		DeleteOneID(int(id)).
		Exec(context.Background())
	if err != nil {
		c.JSON(404, gin.H{
			"error": err.Error(),
		})
		return
	}

	c.JSON(200, gin.H{"result": fmt.Sprintf("ok deleted %v", id)})
}

// UpdateVideo handles PUT requests to update a video entity
// @Summary Update a video entity by ID
// @Description update video by ID
// @ID update-video
// @Accept   json
// @Produce  json
// @Param id path int true "Video ID"
// @Param video body ent.Video true "Video entity"
// @Success 200 {object} ent.Video
// @Failure 400 {object} gin.H
// @Failure 500 {object} gin.H
// @Router /videos/{id} [put]
func (ctl *VideoController) UpdateVideo(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(400, gin.H{
			"error": err.Error(),
		})
		return
	}

	obj := ent.Video{}
	if err := c.ShouldBind(&obj); err != nil {
		c.JSON(400, gin.H{
			"error": "video binding failed",
		})
		return
	}
	obj.ID = int(id)
	u, err := ctl.client.Video.
		UpdateOne(&obj).
		Save(context.Background())
	if err != nil {
		c.JSON(400, gin.H{"error": "update failed"})
		return
	}

	c.JSON(200, u)
}

// NewVideoController creates and registers handles for the video controller
func NewVideoController(router gin.IRouter, client *ent.Client) *VideoController {
	videocontroller := &VideoController{
		client: client,
		router: router,
	}
	videocontroller.register()
	return videocontroller
}

// InitVideoController registers routes to the main engine
func (ctl *VideoController) register() {
	videos := ctl.router.Group("/videos")
	// CRUD
	videos.GET("", ctl.ListVideo)
	videos.POST("", ctl.CreateVideo)
	videos.GET(":id", ctl.GetVideo)
	videos.PUT(":id", ctl.UpdateVideo)
	videos.DELETE(":id", ctl.DeleteVideo)
}
