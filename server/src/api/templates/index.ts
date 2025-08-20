import { Router, Request, Response } from 'express';
import { TemplateService } from '../../services/template.service';

const router = Router();
const templateService = new TemplateService();

// Get all templates
router.get('/', async (req: Request, res: Response) => {
  try {
    const templates = await templateService.getAllTemplates();
    res.json(templates);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch templates' });
  }
});

// Get specific template
router.get('/:name', async (req: Request, res: Response) => {
  try {
    const { name } = req.params;
    const template = await templateService.getTemplate(name);
    res.json(template);
  } catch (error) {
    res.status(404).json({ error: 'Template not found' });
  }
});

export default router;