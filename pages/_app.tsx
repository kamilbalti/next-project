import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { createStore } from "redux";
import Reducer, { initialState } from "../redux/Reducer";
import { Provider } from "react-redux";
import Navbar from '../Components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  const store = createStore(Reducer, initialState);

  return (
  <Provider store={store}>
    <Navbar />
    <Component {...pageProps} />
  </Provider>
)}
export default MyApp
