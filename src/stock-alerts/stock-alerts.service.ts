import { Injectable } from '@nestjs/common';
import { CreateStockAlertInput } from './dto/create-stock-alert.input';
import { UpdateStockAlertInput } from './dto/update-stock-alert.input';

@Injectable()
export class StockAlertsService {
  create(createStockAlertInput: CreateStockAlertInput) {
    return 'This action adds a new stockAlert';
  }

  findAll() {
    return `This action returns all stockAlerts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockAlert`;
  }

  update(id: number, updateStockAlertInput: UpdateStockAlertInput) {
    return `This action updates a #${id} stockAlert`;
  }

  remove(id: number) {
    return `This action removes a #${id} stockAlert`;
  }
}
