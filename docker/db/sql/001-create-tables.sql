---- drop ----
DROP TABLE IF EXISTS `test_table`;

---- create ----
CREATE TABLE IF NOT EXISTS `test_table`
(
 `id`               INT(20) AUTO_INCREMENT,
 `name`             VARCHAR(20) NOT NULL,
 `created_at`       Datetime DEFAULT NULL,
 `updated_at`       Datetime DEFAULT NULL,
    PRIMARY KEY (`id`)
)