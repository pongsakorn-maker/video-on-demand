package schema

import (
	"github.com/facebookincubator/ent"
	"github.com/facebookincubator/ent/schema/field"
)

// Video holds the schema definition for the Video entity.
type Video struct {
	ent.Schema
}

// Fields of the Video.
func (Video) Fields() []ent.Field {
	return []ent.Field{
		field.String("title").NotEmpty(),
		field.String("description").NotEmpty(),
		field.Time("timestamp"),
	}
}

// Edges of the Video.
func (Video) Edges() []ent.Edge {
	return nil
}
