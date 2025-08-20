import * as fs from 'fs/promises';
import * as path from 'path';

export class LayoutService {
  private templatesPath = path.join(__dirname, '../templates/layouts');

  async getHomeLayout() {
    // 샘플 홈 레이아웃 - 실제로는 파일에서 읽거나 DB에서 가져옴
    return {
      "templates": {
        "home_template": {
          "card": {
            "log_id": "home_screen",
            "states": [
              {
                "state_id": 0,
                "div": {
                  "type": "container",
                  "orientation": "vertical",
                  "items": [
                    {
                      "type": "text",
                      "text": "Welcome to DivKit SDUI",
                      "font_size": 24,
                      "font_weight": "bold",
                      "text_alignment_horizontal": "center",
                      "margins": {
                        "top": 20,
                        "bottom": 20
                      }
                    },
                    {
                      "type": "text",
                      "text": "Server Driven UI Learning Project",
                      "font_size": 16,
                      "text_alignment_horizontal": "center",
                      "text_color": "#666666"
                    },
                    {
                      "type": "container",
                      "orientation": "horizontal",
                      "content_alignment_horizontal": "center",
                      "margins": {
                        "top": 30
                      },
                      "items": [
                        {
                          "type": "text",
                          "text": "Get Started",
                          "font_size": 18,
                          "text_color": "#FFFFFF",
                          "background": [
                            {
                              "type": "solid",
                              "color": "#007AFF"
                            }
                          ],
                          "paddings": {
                            "left": 20,
                            "right": 20,
                            "top": 10,
                            "bottom": 10
                          },
                          "corner_radius": 8
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          }
        }
      }
    };
  }

  async getProductLayout(productId: string) {
    // 샘플 상품 상세 레이아웃
    return {
      "templates": {
        "product_template": {
          "card": {
            "log_id": "product_detail",
            "states": [
              {
                "state_id": 0,
                "div": {
                  "type": "container",
                  "orientation": "vertical",
                  "items": [
                    {
                      "type": "image",
                      "image_url": "https://via.placeholder.com/300x200",
                      "scale": "fit",
                      "height": {
                        "type": "fixed",
                        "value": 200
                      }
                    },
                    {
                      "type": "text",
                      "text": `Product ${productId}`,
                      "font_size": 20,
                      "font_weight": "bold",
                      "margins": {
                        "top": 16,
                        "left": 16,
                        "right": 16
                      }
                    },
                    {
                      "type": "text",
                      "text": "$99.99",
                      "font_size": 18,
                      "text_color": "#007AFF",
                      "margins": {
                        "top": 8,
                        "left": 16,
                        "right": 16
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      }
    };
  }

  async getProfileLayout() {
    // 샘플 프로필 레이아웃
    return {
      "templates": {
        "profile_template": {
          "card": {
            "log_id": "profile_screen",
            "states": [
              {
                "state_id": 0,
                "div": {
                  "type": "container",
                  "orientation": "vertical",
                  "items": [
                    {
                      "type": "container",
                      "orientation": "horizontal",
                      "content_alignment_vertical": "center",
                      "margins": {
                        "all": 16
                      },
                      "items": [
                        {
                          "type": "image",
                          "image_url": "https://via.placeholder.com/60",
                          "width": {
                            "type": "fixed",
                            "value": 60
                          },
                          "height": {
                            "type": "fixed",
                            "value": 60
                          },
                          "corner_radius": 30
                        },
                        {
                          "type": "container",
                          "orientation": "vertical",
                          "margins": {
                            "left": 16
                          },
                          "items": [
                            {
                              "type": "text",
                              "text": "User Name",
                              "font_size": 18,
                              "font_weight": "bold"
                            },
                            {
                              "type": "text",
                              "text": "user@example.com",
                              "font_size": 14,
                              "text_color": "#666666",
                              "margins": {
                                "top": 4
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          }
        }
      }
    };
  }
}