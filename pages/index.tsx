import React from "react";
import Head from "next/head";
import Layout from '../components/layout/layout';
import Weather from "../components/weather/weather";

export default function Home({results} : any): JSX.Element {
  return (
    <>
      <Head>
        <title>Should I Take a Coat?</title>
        <meta name="description" content="Should i take a coat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" className="rounded-full" />
      </Head>
      <Layout>
        <div className="min-h-screen  flex flex-row items-center justify-center">
        <Weather results={results}></Weather>
        </div>
      </Layout>
    </>
  );
}


export async function getServerSideProps() {

  var latitude = 51.5;
  var longitude = -0.13;

  const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum&windspeed_unit=mph&timeformat=unixtime&timezone=auto`);
  const data = await res.json();
  return {
      props: {
          results: data
      }
  }
}