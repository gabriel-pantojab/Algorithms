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
