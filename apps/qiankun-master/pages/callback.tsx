import {
  casdoorEndpoint,
  clientId,
  clientSecret,
  redirectUri,
} from '@/constant';
import axios from 'axios';
import { useEffect } from 'react';
import { history } from 'umi';

const Callback = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      const exchangeToken = async () => {
        try {
          // Exchange authorization code for tokens
          const response = await axios.post(
            `${casdoorEndpoint}/api/login/oauth/access_token`,
            {
              client_id: clientId,
              client_secret: clientSecret,
              code: code,
              grant_type: 'authorization_code',
              redirect_uri: redirectUri,
            },
          );

          const { access_token, id_token } = response.data;

          // Decode the ID token to get user info
          const userInfoResponse = await axios.get(
            `${casdoorEndpoint}/api/userinfo`,
            {
              headers: { Authorization: `Bearer ${access_token}` },
            },
          );

          const user = userInfoResponse.data;

          // Store user info in local storage or state management
          localStorage.setItem('user', JSON.stringify(user));

          // Redirect to the home page or dashboard
          history.push('/');
        } catch (error) {
          console.error('Error during OAuth callback:', error);
        }
      };

      exchangeToken();
    }
  }, []);

  return <div>Processing login...</div>;
};

export default Callback;
