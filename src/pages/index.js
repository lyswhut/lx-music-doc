import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className={clsx('button button--primary button--lg', styles.button)} to="/desktop">
            桌面版文档
          </Link>
          <Link className={clsx('button button--primary button--lg', styles.button)} to="/mobile">
            移动版文档
          </Link>
          <Link className={clsx('button button--primary button--lg', styles.button)} to="/download">
            软件下载
          </Link>
          <Link className={clsx('button button--primary button--lg', styles.button)} to="/report">
            问题反馈
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description={`${siteConfig.title} - ${siteConfig.tagline}`}
      >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
