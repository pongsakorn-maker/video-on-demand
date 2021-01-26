package main

import (
	"context"
	"log"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/mattn/go-sqlite3"
	"github.com/pongsakorn-maker/video-on-demand/controllers"
	_ "github.com/pongsakorn-maker/video-on-demand/docs"
	"github.com/pongsakorn-maker/video-on-demand/ent"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

// Users collections
type Users struct {
	User []User
}

// User structure
type User struct {
	Fname     string
	Sname     string
	Email     string
	Password  string
	Tel       string
	Birthdate string
}

// Videos collections
type Videos struct {
	Video []Video
}

// Video structure
type Video struct {
	OwnerID     int
	Title       string
	Description string
	URL         string
}

// @title SUT SA Example API
// @version 1.0
// @description This is a sample server for SUT SE 2563
// @termsOfService http://swagger.io/terms/

// @contact.name API Support
// @contact.url http://www.swagger.io/support
// @contact.email support@swagger.io
// @license.name Apache 2.0
// @license.url http://www.apache.org/licenses/LICENSE-2.0.html

// @host localhost:8080
// @BasePath /api/v1

// @securityDefinitions.basic BasicAuth

// @securityDefinitions.apikey ApiKeyAuth
// @in header
// @name Authorization

// @securitydefinitions.oauth2.application OAuth2Application
// @tokenUrl https://example.com/oauth/token
// @scope.write Grants write access
// @scope.admin Grants read and write access to administrative information

// @securitydefinitions.oauth2.implicit OAuth2Implicit
// @authorizationUrl https://example.com/oauth/authorize
// @scope.write Grants write access
// @scope.admin Grants read and write access to administrative information

// @securitydefinitions.oauth2.password OAuth2Password
// @tokenUrl https://example.com/oauth/token
// @scope.read Grants read access
// @scope.write Grants write access
// @scope.admin Grants read and write access to administrative information

// @securitydefinitions.oauth2.accessCode OAuth2AccessCode
// @tokenUrl https://example.com/oauth/token
// @authorizationUrl https://example.com/oauth/authorize
// @scope.admin Grants read and write access to administrative information
func main() {
	router := gin.Default()
	router.Use(cors.Default())

	client, err := ent.Open("sqlite3", "file:database.db?cache=shared&_fk=1")
	if err != nil {
		log.Fatalf("fail to open sqlite3: %v", err)
	}
	defer client.Close()

	if err := client.Schema.Create(context.Background()); err != nil {
		log.Fatalf("failed creating schema resources: %v", err)
	}

	v1 := router.Group("/api/v1")
	controllers.NewUserController(v1, client)
	controllers.NewVideoController(v1, client)

	// Set User Data
	user := Users{
		User: []User{
			User{"Pongsakorn", "Maprakhon", "pongsakorn@gmail.com", "123456", "0912345678", "2021-01-27T04:11:13.4271549+07:00"},
			User{"Somchai", "Sabaidee", "somchai@gmail.com", "123456", "0812345678", "2021-01-27T04:11:13.4271549+07:00"},
		},
	}

	for _, user := range user.User {
		time, err := time.Parse(time.RFC3339, user.Birthdate)
		if err != nil {
			println(err)
		}
		client.User.
			Create().
			SetFname(user.Fname).
			SetSname(user.Sname).
			SetEmail(user.Email).
			SetPassword(user.Password).
			SetTel(user.Tel).
			SetBirthdate(time).
			Save(context.Background())
	}

	// Set Video Data
	video := Videos{
		Video: []Video{
			Video{1, "BigBunny", "BigBunny test video mp4 file", "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"},
			Video{1, "กอดได้ไหม UrboyTJ - Cover K-OTIC", "กอดได้ไหม UrboyTJ - Cover K-OTIC รวมวงอีกครั้ง", "https://storage.googleapis.com/video-on-demand-sut/kotic.mp4"},
		},
	}

	for _, video := range video.Video {
		client.Video.
			Create().
			SetOwnerID(video.OwnerID).
			SetTitle(video.Title).
			SetDescription(video.Description).
			SetURL(video.URL).
			SetTimestamp(time.Now()).
			Save(context.Background())
	}

	router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	router.Run()
}
