import { Controller, Get } from '@nestjs/common'

@Controller('posts')
export class PostsController {
  @Get()
  get() {
    return 'OK'
  }
}
