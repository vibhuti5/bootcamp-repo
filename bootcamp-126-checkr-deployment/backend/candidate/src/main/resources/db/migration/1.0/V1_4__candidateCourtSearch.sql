INSERT INTO checkr.candidate_court_searches (status, created_at, updated_at, court_searches_id, candidates_id)
SELECT
    CASE WHEN RAND() > 0.5 THEN 'CLEAR' ELSE 'CONSIDER' END AS status,
    NOW(), NOW(), cs.id AS court_searches_id, c.id AS candidates_id
FROM
    checkr.court_searches AS cs
CROSS JOIN
    checkr.candidates AS c;