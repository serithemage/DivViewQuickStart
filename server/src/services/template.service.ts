export class TemplateService {
  private templates = new Map<string, any>();

  constructor() {
    this.initializeTemplates();
  }

  private initializeTemplates() {
    // 기본 템플릿들 초기화
    this.templates.set('button', {
      type: 'text',
      text: '${text}',
      font_size: 16,
      text_color: '#FFFFFF',
      background: [
        {
          type: 'solid',
          color: '${color}'
        }
      ],
      paddings: {
        left: 16,
        right: 16,
        top: 8,
        bottom: 8
      },
      corner_radius: 4
    });

    this.templates.set('card', {
      type: 'container',
      orientation: 'vertical',
      background: [
        {
          type: 'solid',
          color: '#FFFFFF'
        }
      ],
      margins: {
        all: 8
      },
      paddings: {
        all: 12
      },
      corner_radius: 8,
      items: '${items}'
    });
  }

  async getAllTemplates() {
    return Array.from(this.templates.entries()).map(([name, template]) => ({
      name,
      template
    }));
  }

  async getTemplate(name: string) {
    const template = this.templates.get(name);
    if (!template) {
      throw new Error(`Template ${name} not found`);
    }
    return template;
  }
}