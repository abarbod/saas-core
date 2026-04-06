import { HealthController } from '../src/health/health.controller';

describe('HealthController', () => {
  it('returns healthy status', () => {
    const controller = new HealthController({ values: { NODE_ENV: 'test' } } as any);
    const result = controller.getHealth();
    expect(result.status).toBe('ok');
    expect(result.env).toBe('test');
  });
});
