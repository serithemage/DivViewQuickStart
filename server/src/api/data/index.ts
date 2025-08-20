import { Router, Request, Response } from 'express';
import { DataService } from '../../services/data.service';

const router = Router();
const dataService = new DataService();

// Get dynamic data for templates
router.get('/:type', async (req: Request, res: Response) => {
  try {
    const { type } = req.params;
    const data = await dataService.getData(type);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

export default router;