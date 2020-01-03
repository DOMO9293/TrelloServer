INSERT INTO USERS
  (email, password, userName, createdAt, updatedAt)
VALUES
  ('111@test.com', '7dcf0061d18f8497ca853149a33f3cb9cf14adb05f02336c35e2c2b0ffc34760226adf2291ec3289a46bf1849736bf9ce3681cc6a6aaad1d0de4afb99faf7724', 'user01', '2019-11-03', '2019-11-03'),
  ('222@test.com', '7dcf0061d18f8497ca853149a33f3cb9cf14adb05f02336c35e2c2b0ffc34760226adf2291ec3289a46bf1849736bf9ce3681cc6a6aaad1d0de4afb99faf7724', 'user02', '2019-11-03', '2019-11-03'),
  ('333@test.com', '7dcf0061d18f8497ca853149a33f3cb9cf14adb05f02336c35e2c2b0ffc34760226adf2291ec3289a46bf1849736bf9ce3681cc6a6aaad1d0de4afb99faf7724', 'user03', '2019-11-03', '2019-11-03');

/*
프로젝트 루트 폴더 터미널에서,
-- mysql -u root -p foodo < ./testData.sql
-- test user 비밀번호는 모두 12341234 입니다. */