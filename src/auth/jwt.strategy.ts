import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      // Cara ambil token: Dari Header 'Authorization: Bearer <token>'
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, // Token kadaluarsa = Ditolak
      secretOrKey: configService.get<string>('JWT_SECRET'), 
    });
  }

  // Jika token valid, data payload (id, email) akan dikembalikan ke Request
  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email, role: payload.role };
  }
}