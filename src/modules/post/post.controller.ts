import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/middlewares';
import { Token } from 'src/utils';
import { WritePostDTO } from './dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('/')
  @UseGuards(new AuthGuard())
  async writePost(@Token() decoded: any, @Body() req: WritePostDTO) {
    await this.postService.writePost(req, decoded);
    return { status: 200, message: 'success' };
  }
}
