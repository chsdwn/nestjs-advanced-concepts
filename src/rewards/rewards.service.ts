import { Injectable } from '@nestjs/common';

@Injectable()
export class RewardsService {
  createdAt: string;

  constructor() {
    this.createdAt = new Date().toISOString();
  }

  grantTo() {
    console.log('[RewardsService:grantTo()]: createdAt:', this.createdAt);
  }
}
