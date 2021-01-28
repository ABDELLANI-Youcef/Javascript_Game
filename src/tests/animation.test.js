import { burnBomb } from '../Scenes/animations'
import mergeSort  from "../utilities";

const bomb = {
  destroy: () => 'burned bomb'
}

test('Burn bomb calls the method destroy of the bomb', () => {
  expect(burnBomb(null, bomb)).toBe('burned bomb');
});

test('mergeSort sorts the array according to a specefic property decreasing successfuly', () => {
  let array = [{score:1},{score:2},{score:3}];
  // console.log(mergeSort(array,'score'));
  expect(mergeSort(array,'score')).toStrictEqual([ { score: 3 }, { score: 2 }, { score: 1 } ])
});