import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ItemsService } from './items.service';

describe('ItemsService', () => {
  let service: ItemsService;
  let httpClientSpy: any;

  beforeEach(() => {
    httpClientSpy = {
      get: jest.fn(),
    };
    service = new ItemsService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have favorites array and it should be empty', () => {
    expect(service.favorites).toEqual([]);
  });

  it('should have url string and it should equal given string', () => {
    const url =
      'https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json';

    expect(service.url).toEqual(url);
  });

  it('should have getData method that calls http get', () => {
    const retVal = {};
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(retVal));
    service.getData();

    expect(httpClientSpy.get).toBeCalled();
    expect(httpClientSpy.get).toBeCalledTimes(1);
  });
});
