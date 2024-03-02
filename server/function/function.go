package function

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func GetUser(c echo.Context) error {
	// User ID from path `users/:id`
	id := c.Param("id")
	return c.String(http.StatusOK, id)
}