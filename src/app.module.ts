import { Module } from '@nestjs/common'
import { PostsController } from './posts/posts.controller';

@Module({
  imports: [],
  controllers: [PostsController],
})
export class AppModule {}
