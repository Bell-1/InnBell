import { useNamespace } from '@innbell/utils';
import { InnCalculator } from '@/components/innbell-ui';
import { InnButton } from '@/components/innbell-ui';
import './index.scss'

const InnUI = () => {
  const ns = useNamespace('InnUI');
  const btnNs = useNamespace('InnUI-btn');

  return (
    <div className={ns.b()}>
      <div className={ns.e('title')}>This is a React demo that uses the Innbell-ui Button.</div>
      <div className={btnNs.b()}>
        <div className={btnNs.e('group')}>
          <div className={btnNs.e('title')}>base</div>
          <InnButton>default</InnButton>
          <InnButton type="primary">primary</InnButton>
          <InnButton type="success">success</InnButton>
          <InnButton type="warning">warning</InnButton>
          <InnButton type="danger">danger</InnButton>
          <InnButton type="dashed">dashed</InnButton>
          <InnButton type="text">text</InnButton>
          <InnButton type="link">link</InnButton>
        </div>
        <div className={btnNs.e('group')}>
          <div className={btnNs.e('title')}>ghost</div>
          <InnButton ghost>default</InnButton>
          <InnButton type="primary" ghost>primary</InnButton>
          <InnButton type="success" ghost>success</InnButton>
          <InnButton type="warning" ghost>warning</InnButton>
          <InnButton type="danger" ghost>danger</InnButton>
        </div>

        <div className={btnNs.e('group')}>
          <div className={btnNs.e('title')}>ghost</div>
          <InnButton round>default</InnButton>
          <InnButton type="primary" round>primary</InnButton>
          <InnButton type="success" round>success</InnButton>
          <InnButton type="warning" round>warning</InnButton>
          <InnButton type="danger" round>danger</InnButton>
        </div>

        <div className={btnNs.e('group')}>
          <div className={btnNs.e('title')}>ghost + round</div>
          <InnButton ghost round>default</InnButton>
          <InnButton type="primary" ghost round>primary</InnButton>
          <InnButton type="success" ghost round>success</InnButton>
          <InnButton type="warning" ghost round>warning</InnButton>
          <InnButton type="danger" ghost round>danger</InnButton>
        </div>

        <div className={btnNs.e('group')}>
          <div className={btnNs.e('title')}>circle</div>
          <InnButton circle>B</InnButton>
          <InnButton type="primary" circle>P</InnButton>
          <InnButton type="success" circle>S</InnButton>
          <InnButton type="warning" circle>W</InnButton>
          <InnButton type="danger" circle>D</InnButton>
        </div>
      </div>

      <div className={ns.e('title')}>Calculator</div>
      <InnCalculator />
    </div>
  );
};

export default InnUI;
