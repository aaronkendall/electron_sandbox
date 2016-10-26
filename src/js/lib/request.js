const request = {
    get: function(url) {
        const request = new Promise((resolve, reject) => {
          const req = new XMLHttpRequest();

          req.open("GET", url);
          req.send();

          req.onload = function () {
              if (this.status >= 200 && this.status < 300) {
                  resolve(this.response);
              }
              else {
                  reject(this.statusText);
              }
          };

          req.onerror = function() {
              reject(this.statusText);
          };
        });

        return request;
    }
};

export default request;
