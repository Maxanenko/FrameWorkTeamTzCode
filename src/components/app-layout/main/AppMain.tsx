import PaintingList from './painting-list/PaintingList.js';
import appHeader_s from './appMain.module.scss';

export default function AppMain() {
  return (
    <main className={appHeader_s.paintings} aria-labelledby="paintings-title">
      <h1 className="visually-hidden" id="paintings-title">
        Paintings
      </h1>
      <div className="paintings__inner container">
        <div className="paintings__body">
          <PaintingList />
        </div>
      </div>
    </main>
  );
}
