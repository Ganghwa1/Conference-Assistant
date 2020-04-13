<template>
    <div class="file-storage-form">
        <select name="file-sort">
            <option value="">타입선택</option>
            <option value="등록일자">등록일자</option>
            <option value="위치">위치</option>
        </select>
        <button name="download-btn" style="margin-left:80%;width:8%; background-color:rgb(223, 223, 223); border: 1px solid rgb(223, 223, 223); color:black; padding-top:5px; padding-bottom: 5px; border-radius:0.2rem; font-size:14px;">다운로드</button>
        <button name="delete-btn" style="margin-top:-1px; margin-left:3px; width:8%; background-color:rgb(223, 223, 223); border: 1px solid rgb(223, 223, 223); color:black; padding-top:5px; padding-bottom: 5px;border-radius:0.2rem; font-size:14px;">삭제</button>
        <table class="table">
            <tr class="table-header-tr">
                <td>작성자</td>
                <td>파일명</td>
                <td>위치</td>
                <td>등록일자</td>
            </tr>
             <tr>
                 <td></td>
                <td style="text-align:center; padding-left:15px; font-weight:600;">    데이터가 없습니다.</td>
            </tr>

        </table>
    </div>
</template>
<script>
export default {
    name : 'FileStorageForm'
}
</script>
<style scope>
.file-storage-form{
   z-index:0;
   position: fixed;
   margin-top:1.8%;
   width: 1100px;
   height: 610px;
   margin-left: 19%;
   box-shadow: 4px 4px 2px rgb(233, 233, 233);
   background-color: #fff;
   border: 1px solid #eeeeee;
   border-radius: 1.2rem;
}
select{
    margin-left: 20px;
    margin-top:15px;
    width: 200px;
    padding: .8em .5em;
    border: 1px solid rgb(223, 223, 223);
    border-radius:1rem;
    font-family: inherit;
    background: url('../img/select_drop.png') no-repeat 93% 30%;
    border-radius: 0px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

}
#download-btn{
    margin-left: 80%;
}
.table{
    margin-top:30px;
    margin-left: 50px;
    width:1000px;
    height:400px;
    background-color:#f5f5f5;
}
.table-header-tr{
    background-color:#32a852;
    color:white;
    font-weight: 600;
    text-align: center;
    height:35px;
}
</style>