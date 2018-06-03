import data from './data.json';

const Utils = {
  to(promise) {
    return promise
      .then(data => {
        return [null, data];
      })
      .catch(err => [err]);
  },

  async httpReq(link) {
    let err, resp;
    [err, resp] = await this.to(fetch(link));
    if (resp) {
      [err, resp] = await this.to(resp.json());
      return resp;
    } else log.debug(JSON.stringify(err));
  },

  localReq() {
    return data;
  }
};

export default Utils;
