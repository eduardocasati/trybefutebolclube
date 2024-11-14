import HttpException from './http_exception.error';

class NotFound extends HttpException {
  private static status = 404;

  constructor(message?: string) {
    super(NotFound.status, message || 'NOT_FOUND');
  }
}

export default NotFound;
