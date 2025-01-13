import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '免费且无广告',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        本项目开发的初衷仅是为了对新技术的学习与研究，因此软件直至停止维护都将会一直保持纯净
      </>
    ),
  },
  {
    title: '多端支持',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        本项目支持在 <strong>Linux</strong>、<strong>macOS</strong>、<strong>Windows</strong> 及 <strong>Android</strong> 平台上运行，<i>目前没有计划支持 iOS 和 HarmonyOS NEXT</i>
      </>
    ),
  },
  {
    title: '开源',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        本项目开源发布于 GitHub 面向全世界人用作对技术的学习交流使用
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
