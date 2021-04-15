import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/middlewares';
import { Token } from 'src/utils';
import { ApplyPostDTO, WritePostDTO } from './dto';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('/')
  @UseGuards(new AuthGuard())
  async writePost(@Token() decoded: any, @Body() req: WritePostDTO) {
    await this.postService.writePost(req, decoded);
    return { status: 200, message: 'success' };
  }

  @Post('/apply')
  @UseGuards(new AuthGuard())
  async applyPost(@Token() decoded: any, @Body() req: ApplyPostDTO) {
    await this.postService.applyPost(req, decoded);
    return { status: 200, message: 'success' };
  }
}
