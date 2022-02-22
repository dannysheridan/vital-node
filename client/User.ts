import { AxiosInstance } from 'axios';
import {
  UserKeyResponse,
  SuccessResponse,
  ClientFacingUser,
  Providers,
  ProvidersResponse,
} from './models/user_models';

export class UserApi {
  baseURL: string;
  client: AxiosInstance;
  constructor(baseURL: string, axios: AxiosInstance) {
    this.baseURL = baseURL;
    this.client = axios;
  }

  public async create(clientUserId: string): Promise<UserKeyResponse> {
    const resp = await this.client.post(this.baseURL.concat('/user/key'), {
      client_user_id: clientUserId,
    });
    return resp.data;
  }

  public async delete(userKey: string): Promise<SuccessResponse> {
    const resp = await this.client.delete(
      this.baseURL.concat(`/user/${userKey}`)
    );
    return resp.data;
  }

  public async getAll(): Promise<Array<ClientFacingUser>> {
    const resp = await this.client.get(this.baseURL.concat('/user/'));
    return resp.data;
  }

  public async get(userKey: string): Promise<ClientFacingUser> {
    const resp = await this.client.get(this.baseURL.concat(`/user/${userKey}`));
    return resp.data;
  }

  public async resolve(clientUserId: string): Promise<ClientFacingUser> {
    const resp = await this.client.get(
      this.baseURL.concat(`/user/key/${clientUserId}`)
    );
    return resp.data;
  }

  public async providers(userKey: string): Promise<ProvidersResponse> {
    const resp = await this.client.get(
      this.baseURL.concat(`/user/providers/${userKey}`)
    );
    return resp.data;
  }

  public async deregisterProvider(
    userKey: string,
    provider: Providers
  ): Promise<SuccessResponse> {
    const resp = await this.client.delete(
      this.baseURL.concat(`/user/${userKey}/${provider}`)
    );
    return resp.data;
  }

  public async refresh(
    userId: string,
  ): Promise<SuccessResponse> {
    const resp = await this.client.post(
      this.baseURL.concat(`/refresh/${userId}`)
    );
    return resp.data;
  }
}
