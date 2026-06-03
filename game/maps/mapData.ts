const BRICK_COLOR = [136, 51, 34, 255];
const JOINT_COLOR = [187, 187, 187, 255];

const width = 256;
const height = 256;
const data: number[][] = [];

for (let y = 0; y < height; y++) {
  const row: number[] = [];
  
  for (let x = 0; x < width; x++) {

    const isHorizontalJoint = y % 4 === 3;
    const isVerticalJoint = (Math.floor(y / 4) % 2 === 0) ? (x % 8 === 7) : (x % 8 === 3);

    if (isHorizontalJoint || isVerticalJoint) {
      row.push(...JOINT_COLOR);
    } else {
      row.push(...BRICK_COLOR);
    }
  }
  
  data.push(row);
}

const mapData = {
  width: width,
  height: height,
  tileSize: 16,
  id: 1,
  data: data
};

export default mapData;

