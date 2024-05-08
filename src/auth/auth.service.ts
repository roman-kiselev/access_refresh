import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  private hashData(data: string) {
    return bcrypt.hashSync(data, 10);
  }

  // dto: AuthDto
  async signupLocal() {
    // try {
    //   const hash = this.hashData(dto.password);
    //   const newUser = await this.prisma.user.create({
    //     data: {
    //       email: dto.email,
    //       hash,
    //     },
    //   });
    // } catch (e) {
    //   console.log(e);
    // }
  }

  signinLocal() {}

  logout() {}

  refreshToken() {}
}
