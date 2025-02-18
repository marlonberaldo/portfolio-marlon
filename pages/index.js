export async function getServerSideProps() {
  return {
    redirect: {
      destination: "https://portfolio-marlon-beraldo.vercel.app",
      permanent: true, // Define se o redirecionamento é permanente (status 308)
    },
  };
}

export default function Home() {
  return null;
}