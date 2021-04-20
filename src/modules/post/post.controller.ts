import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/middlewares';
import { Token } from 'src/utils';
import { ApplyPostDTO, DenyApplyDTO, WritePostDTO } from './dto';
import { GetPostsDTO } from './dto/get-posts.dto';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('/')
  @UseGuards(new AuthGuard())
  async writePost(@Token() decoded: any, @Body() req: WritePostDTO) {
    await this.postService.writePost(req, decoded.id);
    return { status: 200, message: 'success' };
  }

  @Get('/')
  @UseGuards(new AuthGuard())
  async getPosts(@Token() decoded: any, @Query() req: GetPostsDTO) {
    const data = await this.postService.getPosts(req);
    const response = data.map((e) => {
      e['isMine'] = false;
      if (e.userId === decoded.id) e['isMine'] = true;
      return {
        id: e.id,
        title: e.title,
        content: e.content,
        tags: e.tags,
        isMine: e['isMine'],
      };
    });
    return { status: 200, message: 'success', data: response };
  }

  @Post('/apply')
  @UseGuards(new AuthGuard())
  async applyPost(@Token() decoded: any, @Body() req: ApplyPostDTO) {
    await this.postService.applyPost(req, decoded.id);
    return { status: 200, message: 'success' };
  }

  @Delete('/apply/deny')
  @UseGuards(new AuthGuard())
  async denyApply(@Token() decoded: any, @Body() req: DenyApplyDTO) {
    await this.postService.denyApply(req, decoded.id);
    return { status: 200, message: 'success' };
  }
}
