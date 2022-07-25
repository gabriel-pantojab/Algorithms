{-
  INSERTION SORT
-}

insertionSort :: (Ord a) => [a] -> [a]
insertionSort [] = []
insertionSort [x] = [x]
insertionSort (x:xs) = insert x (insertionSort xs)
  where
    insert x [] = [x]
    insert x (y:ys)
      | x < y = x : y : ys
      | otherwise = y : insert x ys

list = [3,1,4,2,5];

{-
	LINEAR SEARCH
-}

linearSearch :: (Eq a) => a -> [a] -> Int
linearSearch v xs = lS v xs 0
  where
    lS v [] p = -1
    lS v (x:xs) p
      | v == x = p
      | otherwise = lS v xs (p+1)

{-
  SELECTION SORT
-}
selectionSort :: (Ord a) => [a] -> [a]
selectionSort (x:[]) = [x]
selectionSort array@(x:xs) =  minimun : (selectionSort subArray)
  where
    list = small array;
    minimun = head list
    subArray = tail list
    small (x:[]) = [x]
    small (x:xs) 
      | x < head subL = x : subL
      | otherwise = head subL : x : tail subL
      where
        subL = small xs

{-
  MERGE SORT
-}
merge :: (Ord a) => [a] -> [a] -> [a]
merge [] [] = []
merge (x:xs) [] = (x:xs)
merge [] (y:ys) = (y:ys)
merge (x:xs) (y:ys)
  | x < y = x : (merge xs (y:ys))
  | otherwise = y : (merge (x:xs) ys)

mergeSort :: (Ord a) => [a] -> [a]
mergeSort [] = []
mergeSort (x:[]) = [x]
mergeSort xs = merge left rigth
  where
    n = length xs
    left  = mergeSort (take (div n 2) xs)
    rigth = mergeSort (drop (div n 2) xs)

