import { Router } from 'express';
//import ExampleController from '../controllers/ExampleController';
import { requireAuth } from '@jmax78/common';
import { get } from 'http';

const logRequest = (req: any, res: any, next: any) => {
  console.log(req.body); // Log the req object to the console
  next(); // Pass control to the next middleware or controller
};

const router = Router();

// Get attribute by id
//router.get('/', logRequest, ExampleController.getAllBuilder);

//get,post,delete,put

export default router;