import { getPageData } from '../../utils/getPageData';

export default function handler(req, res) {
  try {
    const pages = getPageData();
    console.log('Pages data:', pages);
    res.status(200).json(pages);
  } catch (error) {
    console.error('Error in API route:', error);
    res.status(500).json({ error: 'Failed to load page data' });
  }
} 