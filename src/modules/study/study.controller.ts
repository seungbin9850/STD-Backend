import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/middlewares';
import { Token } from 'src/utils';
import { CreateStudyDTO } from './dto';
import { StudyService } from './study.service';

@Controller('studies')
export class StudyController {
  constructor(private readonly studyService: StudyService) {}

  @Post('/')
  @UseGuards(new AuthGuard())
  async createStudy(@Token() decoded: any, @Body() req: CreateStudyDTO) {
    await this.studyService.createStudy(req, decoded.id);
    return { status: 200, message: 'success' };
  }

  @Get('/')
  @UseGuards(new AuthGuard())
  async getMyStudy(@Token() decoded: any) {
    const data = await this.studyService.getMyStudy(decoded.id);
    return { status: 200, message: 'success', data };
  }
}
