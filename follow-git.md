1. Leader tạo dự án
2. - Tạo 1 issue
     - Assignees: gán cho những người nào
     - Label: feature, bug ....
   - Khi nhấn Submit new issue sinh ra 1 issue có đánh số thứ tự (#1, #2, #3 ....)
     vd: giao nhiệm vụ cho Nguyễn Hữu Thiêng thực hiện cái issue này, thì các commit liên quan đến issue này phải được gom lại vào issue này chứ không nằm lung tung
3. Checkout sang nhánh develop (tuyệt đối ko được làm trực tiếp trên nhánh main).
4. Pull code mới nhất từ nhánh main (production) về.
5. từ develop checkout nhánh feature mới dựa trên #issue của feature đó
   vd: Nguyễn Hữu Thiêng - issue #1 - init project
   ==> git checkout -b feature/1-init-project
6. phát triển các tính năng tương ứng từ nhánh feature vừa tạo và commit vào đúng cái #issue
   git commit -m '#issue - comment ...'
   push code lên nhánh tính năng của mình
7. sau khi push lên thì leader sẽ lên github tạo 1 pull request của issue vừa hoàn thành đó vào nhánh develop (ở remote)
8. thằng leader vào code nhánh develop (local) pull code ở nhánh develop (remote) về.
9. từ nhánh develop này sẽ checkout ra nhánh release có đánh số version
   git checkout release-1.0.0
10. 1 tag cho phiên bản release và production bằng cách
    git tag 'v1.0.0'

    git push --tags

    ==> trên github sẽ thấy có 1 cái tag v1.0.0

11. push code release lên remote
12. leader tạo pull request từ release -> main(remote)
13. leader vào code checkout nhánh main(local) pull code từ remote về.
    git tag 'v1.0.0'
    git push --tags

    ==> đánh tag cho production
    ==> code ở nhánh main lúc này có thể build production với tag version tương ứng

14. xóa các branch feature, remote ở local và remote

\*\* tương tự nếu có tính năng mới thì lặp lại các bước trên.
