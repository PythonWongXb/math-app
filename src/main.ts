/*
 * @Author: Evan Zuo v_wangxiangbo01@baidu.com
 * @Date: 2022-05-03 13:42:17
 * @LastEditors: Evan Zuo v_wangxiangbo01@baidu.com
 * @LastEditTime: 2022-05-05 21:13:30
 * @FilePath: /vue-nestjs-ci-cd/micro-service/math/ms-app/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(9000);
}
bootstrap();
