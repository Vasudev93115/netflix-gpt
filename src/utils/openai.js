import OpenAI from 'openai';
import { OpenAiApiKey } from './constants';

const client = new OpenAI({
  apiKey: OpenAiApiKey,
  baseURL: "https://api.groq.com/openai/v1",
  dangerouslyAllowBrowser: true, // This is the default and can be omitted
});
export default client;