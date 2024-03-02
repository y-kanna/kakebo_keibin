package main

import (
	"fmt"
	"myapp/function"
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	// "golang.org/x/text/message"
)

type JsonRequest struct{
	Title string `json:"title"`
	Body string  `json:"body"`
}

func main() {
	e := echo.New()
	e.Use(middleware.CORS())
	
	e.GET("/", func(c echo.Context) error {
			return c.String(http.StatusOK, "JPGE")
		})
		e.GET("/users/:id", function.GetUser)

	e.POST("/", func(c echo.Context) (err error) {
		var jr JsonRequest
	if err := c.Bind(&jr); err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, err.Error())
    }
	fmt.Println(jr)
	// if err = c.Validate(&jr); err != nil {
	// 	fmt.Println(err)
	// 	return err
	// }
	// else {
	// 	fmt.Println(jr.title, jr.body)
	// }
	return c.JSON(http.StatusOK, jr)
	})

	e.Logger.Fatal(e.Start(":8000"))
} 



