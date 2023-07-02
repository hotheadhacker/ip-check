import express from 'express';
import requestIp from 'request-ip';
import geoip from 'geoip-lite';

const app = express();
const port = 3000;

app.get('/ip', (req, res) => {
  const ipAddress = requestIp.getClientIp(req);
  const geoData = geoip.lookup(ipAddress);

  const response = {
    ipAddress,
    location: geoData?.city || '',
    country: geoData?.country || '',
    timezone: geoData?.timezone || '',
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
