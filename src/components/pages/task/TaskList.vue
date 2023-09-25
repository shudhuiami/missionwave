<template>
  <div class="main-inner-body">
    <div class="section-wrapper h-100">
      <div class="filter-section">
        <div class="row mb-4">
          <div class="col-md-6 col-lg-4 col-xxl-3">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search" id="search">
            </div>
          </div>
          <div class="col-md-3 col-lg-5 col-xxl-6"></div>
          <div class="col-md-3 text-end mt-2 mt-md-0">
            <router-link :to="{name: 'TaskManage', params: {id: 1}}" class="btn btn-theme btn-100 me-1 ms-1" style="width: 140px">New Task</router-link>
          </div>
        </div>
      </div>
      <div class="table-section table-responsive">
        <table class="table table-theme table-hover">
          <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td style="min-width: 200px">Course</td>
            <td style="min-width: 200px">20-23-23</td>
            <td class="text-end" style="min-width: 200px;">
              <button class="btn btn-theme btn-round p-0 me-2" style="height: 38px; width: 42px;"><i
                  class="las la-pen"></i></button>
              <button class="btn btn-danger btn-round"><i
                  class="las la-trash"></i></button>
            </td>
          </tr>
          </tbody>
          <tbody class="d-none" v-if="TableData.length === 0 && dataLoading === false">
            <tr>
              <td colspan="10">
                <div class="alert alert-warning text-center">No data found</div>
              </td>
            </tr>
          </tbody>
          <tbody v-if="dataLoading === true">
          <tr>
            <td colspan="10">
              <div class="alert alert-primary text-center">Loading</div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
<!--      <div class="col-md-12">
        <div>
          <LaravelVuePagination>
            <template #prev-nav>
              <span><i class='las la-angle-right'></i></span>
            </template>
            <template #next-nav>
              <span><i class='las la-angle-left'></i></span>
            </template>
          </LaravelVuePagination>
        </div>-->
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return {
      dataLoading: false,
      TableData: []
    }
  }
}
</script>
