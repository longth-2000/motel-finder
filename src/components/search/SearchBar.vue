<template> 
    <div class="search-bar">
        <form id="search-form" action="">
            <div class="search-elements">
                <div class="search-box">
                    <a-input-search
                        placeholder="Tìm phòng trọ"
                        enter-button="Tìm"
                        size="default"
                        @search="onSearch"
                    />
                </div>
                <div class="search-dropdown">
                    <div class="search-dropdown-cell">
                        <div class="text">Loại nhà đất</div>
                        <a-select size="small" v-model="house_type">
                            <a-select-option value="Option1-1">
                            Option1-1
                            </a-select-option>
                            <a-select-option value="Option1-2">
                            Option1-2
                            </a-select-option>
                        </a-select>
                    </div>
                    <div class="search-dropdown-cell">
                        <div class="text">Khu vực</div>
                        <a-select size="small" v-model="region">
                            <a-select-option value="Option1-1">
                            Option1-1
                            </a-select-option>
                            <a-select-option value="Option1-2">
                            Option1-2
                            </a-select-option>
                        </a-select>
                    </div>
                    <div class="search-dropdown-cell">
                        <div class="text">Mức giá</div>
                        <a-select size="small" v-model="price_range">
                            <a-select-option value="Option1-1">
                            Option1-1
                            </a-select-option>
                            <a-select-option value="Option1-2">
                            Option1-2
                            </a-select-option>
                        </a-select>
                    </div>
                    <div class="search-dropdown-cell">
                        <div class="text">Diện tích</div>
                        <a-select size="small" v-model="area">
                            <a-select-option value="Option1-1">
                            Option1-1
                            </a-select-option>
                            <a-select-option value="Option1-2">
                            Option1-2
                            </a-select-option>
                        </a-select>
                    </div>
                    <div class="search-dropdown-cell">
                        <div class="text">Dự án</div>
                        <a-select size="small" v-model="project">
                            <a-select-option value="Option1-1">
                            Option1-1
                            </a-select-option>
                            <a-select-option value="Option1-2">
                            Option1-2
                            </a-select-option>
                        </a-select>
                    </div>
                    <div class="search-dropdown-cell">
                        <div class="text">Phường/Xã</div>
                        <a-select size="small" v-model="ward">
                            <a-select-option value="Option1-1">
                            Option1-1
                            </a-select-option>
                            <a-select-option value="Option1-2">
                            Option1-2
                            </a-select-option>
                        </a-select>
                    </div>
                    <div class="search-dropdown-cell">
                        <div class="text">Đường/Phố</div>
                        <a-select size="small" v-model="street">
                            <a-select-option value="Option1-1">
                            Option1-1
                            </a-select-option>
                            <a-select-option value="Option1-2">
                            Option1-2
                            </a-select-option>
                        </a-select>
                    </div>
                    <div class="submit-button">
                        <a-button type="primary" icon="search">
                            Tìm
                        </a-button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: 'SearchBar',
    data(){
        return {
            house_type: 'Tất cả',
            region : 'Tất cả',
            price_range : 'Tất cả',
            area : 'Tất cả',
            project: 'Tất cả',
            ward: 'Tất cả',
            street : 'Tất cả'
        }
    },
}
</script>
<style scoped>
div.search-elements {
    display: flex;
    align-content: center;
}
div.search-bar {
    border-top: 1px solid rgb(232, 230, 230);
    padding: 15px 15px 50px 15px;
}
div.search-box {
    padding-top: 13px;
    padding-right: 25px;
    width: 550px;
    float: left;
    display: block;
}
div.search-dropdown {
    height: auto;
    padding-bottom: inherit;
}
div.search-dropdown div.search-dropdown-cell {
    width : 130px;
    margin-right:25px; 
    border-right: 1px solid var(--bs-gray-200);
    float: left;
}
.text {
    font-size: 13px;
    display: block;
    width : inherit;
    height : inherit;
}
.submit-button {
    padding-top: 13px;
    display: inline-block;
}
</style>
