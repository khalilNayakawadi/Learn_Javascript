
 SELECT *
 FROM EMP;

     EMPNO ENAME      JOB              MGR HIREDATE         SAL       COMM     DEPTNO
---------- ---------- --------- ---------- --------- ---------- ---------- ----------
      7369 SMITH      CLERK           7902 17-DEC-80        800                    20
      7499 ALLEN      SALESMAN        7698 20-FEB-81       1600        300         30
      7521 WARD       SALESMAN        7698 22-FEB-81       1250        500         30
      7566 JONES      MANAGER         7839 02-APR-81       2975                    20
      7654 MARTIN     SALESMAN        7698 28-SEP-81       1250       1400         30
      7698 BLAKE      MANAGER         7839 01-MAY-81       2850                    30
      7782 CLARK      MANAGER         7839 09-JUN-81       2450                    10
      7788 SCOTT      ANALYST         7566 19-APR-87       3000                    20
      7839 KING       PRESIDENT            17-NOV-81       5000                    10
      7844 TURNER     SALESMAN        7698 08-SEP-81       1500          0         30
      7876 ADAMS      CLERK           7788 23-MAY-87       1100                    20
      7900 JAMES      CLERK           7698 03-DEC-81        950                    30
      7902 FORD       ANALYST         7566 03-DEC-81       3000                    20
      7934 MILLER     CLERK           7782 23-JAN-82       1300                    10

14 rows selected.


SELECT ENAM
 FROM EMP
 WHERE EMPNO = (SELECT MGR
                 FROM EMP
                 WHERE ENAME = 'SCOTT');

ENAME
----------
JONES


SELECT ENAME
FROM EMP
WHERE EMPNO = (SELECT MGR
               FROM EMP
               WHERE ENAME = 'ALLEN');

ENAME
----------
BLAKE


SELECT *
FROM EMP
WHERE EMPNO = (SELECT MGR
               FROM EMP
               WHERE ENAME = 'TURNER');

     EMPNO ENAME      JOB              MGR HIREDATE         SAL       COMM     DEPTNO
---------- ---------- --------- ---------- --------- ---------- ---------- ----------
      7698 BLAKE      MANAGER         7839 01-MAY-81       2850                    30


SELECT ENAME
FROM EMP
WHERE MGR = (SELECT EMPNO
             FROM EMP
             WHERE ENAME = 'FORD');

ENAME
----------
SMITH


SELECT COUNT(*)
FROM EMP
WHERE MGR = (SELECT EMPNO
             FROM EMP
             WHERE ENAME = 'BLAKE');

  COUNT(*)
----------
         5




SELECT DNAME
FROM DEPT
WHERE DEPTNO = (SELECT DEPTNO
                FROM EMP
                WHERE EMPNO = (SELECT MGR
                               FROM EMP
                               WHERE ENAME = 'CLARK'));

DNAME
--------------
ACCOUNTING


SELECT LOC
FROM DEPT
WHERE DEPTNO = (SELECT DEPTNO
                FROM EMP
                WHERE MGR = (SELECT EMPNO
                             FROM EMP
                             WHERE ENAME = 'KING'))

WHERE DEPTNO = (SELECT DEPTNO
                *
ERROR at line 3:
ORA-01427: single-row subquery returns more than one row



SELECT ENAME
FROM EMP
WHERE EMPNO = (SELECT MGR
               FROM EMP
               WHERE EMPNO = (SELECT MGR
                              FROM EMP
                              WHERE ENAME = 'SMITH'));

ENAME
----------
JONES


SELECT ENAME
FROM EMP
WHERE EMPNO = (SELECT MGR 
               FROM EMP
               WHERE ENAME = 'SMITH');

ENAME
----------
FORD


SELECT SAL
FROM EMP
WHERE EMPNO = (SELECT MGR
               FROM EMP
               WHERE ENAME = 'MILLER');

       SAL
----------
      2450


SELECT ENAME
FROM EMP
WHERE EMPNO = (SELECT MGR
               FROM EMP
               WHERE ENAME = 'ALLEN');

ENAME
----------
BLAKE


SELECT SAL
FROM EMP
WHERE EMPNO = (SELECT MGR 
               FROM EMP
               WHERE ENAME = 'ADAMS');

       SAL
----------
      3000


SELECT ENAME
FROM EMP
WHERE EMPNO = (SELECT MGR
               FROM EMP
               WHERE EMPNO = (SELECT MGR 
                              FROM EMP
                              WHERE ENAME = 'ADAMS'));

ENAME
----------
JONES


SELECT LOC
FROM DEPT
WHERE DEPTNO = (SELECT DEPTNO
                FROM EMP
                WHERE EMPNO = (SELECT MGR
                               FROM EMP
                               WHERE EMPNO = (SELECT MGR
                                              FROM EMP
                                              WHERE ENAME = 'SMITH')));

LOC
-------------
DALLAS


SELECT COUNT(*)
FROM EMP
WHERE MGR = (SELECT EMPNO
             FROM EMP
             WHERE ENAME = 'KING');

  COUNT(*)
----------
         3


SELECT ENAME
FROM EMP
WHERE MGR = (SELECT EMPNO
             FROM EMP
             WHERE ENAME = 'BLAKE');

ENAME
----------
ALLEN
WARD
MARTIN
TURNER
JAMES


SELECT *
FROM EMP
WHERE MGR = (SELECT EMPNO
             FROM EMP
             WHERE ENAME = 'JONES');

     EMPNO ENAME      JOB              MGR HIREDATE         SAL       COMM     DEPTNO
---------- ---------- --------- ---------- --------- ---------- ---------- ----------
      7788 SCOTT      ANALYST         7566 19-APR-87       3000                    20
      7902 FORD       ANALYST         7566 03-DEC-81       3000                    20


SELECT LOC
FROM DEPT
WHERE DEPTNO = (SELECT DEPTNO
                FROM EMP
                WHERE EMPNO = (SELECT MGR
                               FROM EMP
                               WHERE ENAME = 'MARTIN'));

LOC
-------------
CHICAGO


SELECT COUNT(*)
FROM EMP
WHERE MGR = (SELECT EMPNO
             FROM EMP
             WHERE ENAME = 'FORD');

  COUNT(*)
----------
         1


SELECT COMM
FROM EMP
WHERE EMPNO = (SELECT MGR
               FROM EMP
               WHERE EMPNO = (SELECT MGR
                              FROM EMP
                              WHERE ENAME = 'BLAKE'));

no rows selected


SELECT DNAME
FROM DEPT
WHERE DEPTNO = (SELECT DEPTNO
                FROM EMP
                WHERE EMPNO = (SELECT MGR
                               FROM EMP
                               WHERE ENAME = 'CLARK'));

DNAME
--------------
ACCOUNTING


SELECT LOC
FROM DEPT
WHERE DEPTNO = (SELECT DEPTNO 
                FROM EMP
                WHERE EMPNO = (SELECT MGR
                               FROM EMP
                               WHERE ENAME = 'SCOTT'));

LOC
-------------
DALLAS


