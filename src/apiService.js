// First, let's create an API service file (apiService.js)

const API_BASE_URL = 'https://messaging.afri-health.com/api';
const AUTH_TOKEN = 'b4887110-bf00-11ee-abca-79fc216898e5';

export const apiService = {
  createMeeting: async (hostName, email) => {
    try {
      const response = await fetch(`${API_BASE_URL}/rooms/create`, {
        method: 'POST',
        headers: {
          'Authorization': AUTH_TOKEN,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: 'RigourOS Consultation',
          type: 'Consultation',
          createdBy: email,
          host: hostName
        })
      });

      if (!response.ok) {
        throw new Error('Failed to create meeting');
      }

      return await response.json();
    } catch (error) {
      console.error('Error creating meeting:', error);
      throw error;
    }
  },

  joinMeeting: async (meetingId, name) => {
    try {
      const response = await fetch(`${API_BASE_URL}/rooms/join`, {
        method: 'POST',
        headers: {
          'Authorization': AUTH_TOKEN,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          meetingId,
          name
        })
      });

      if (!response.ok) {
        throw new Error('Failed to join meeting');
      }

      return await response.json();
    } catch (error) {
      console.error('Error joining meeting:', error);
      throw error;
    }
  }
};
