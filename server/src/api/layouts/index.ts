import { Router, Request, Response } from 'express';
import { LayoutService } from '../../services/layout.service';

const router = Router();
const layoutService = new LayoutService();

// Get home layout
router.get('/home', async (req: Request, res: Response) => {
  try {
    const layout = await layoutService.getHomeLayout();
    res.json(layout);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch home layout' });
  }
});

// Get product detail layout
router.get('/product/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const layout = await layoutService.getProductLayout(id);
    res.json(layout);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product layout' });
  }
});

// Get profile layout
router.get('/profile', async (req: Request, res: Response) => {
  try {
    const layout = await layoutService.getProfileLayout();
    res.json(layout);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch profile layout' });
  }
});

export default router;