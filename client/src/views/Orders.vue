<template>
  <div class="order__container d-flex align-items-center justify-content-center flex-column flex-fill">
    <b-container class=" orders">
    <h3 class="align-self-start">Orders</h3>
    <template class="w-100">
      <div class="accordion w-100" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-1 variant="dark">
              ORDER #992930330 • 2020-09-22 • TOTAL PRICE: $1902
            </b-button>
          </b-card-header>
          <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-list-group>

                <b-list-group-item class="d-flex ">
                  <b-avatar src="https://placekitten.com/300/300" size="5em"></b-avatar>
                  <div class="flex-fill ml-3">
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">Airpods</h5>
                      <small>1x</small>
                    </div>

                    <p class="mb-1">
                      The best of the best headphones this is supposed to be the damn description.
                    </p>

                    <small>$399.00</small>
                  </div>
                </b-list-group-item>

                <b-list-group-item class="d-flex">
                  <b-avatar src="https://placekitten.com/300/300" size="5em"></b-avatar>
                  <div class="flex-fill ml-3">
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">RayCon</h5>
                      <small class="text-muted">3x</small>
                    </div>

                    <p class="mb-1">
                      Second best airpods copycat in the whole damn world and we are taking over baby.
                    </p>

                    <small>$989.00</small>
                  </div>
                </b-list-group-item>

              </b-list-group>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-2 variant="dark">
              ORDER #19292B330 • 2010-10-12 • TOTAL PRICE: $22902
            </b-button>
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-3 variant="dark">
              ORDER #33292B330 • 2009-01-03 • TOTAL PRICE: $312
            </b-button>
          </b-card-header>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </template>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Orders',
  data () {
    return {
      text: `
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
        synth nesciunt you probably haven't heard of them accusamus labore VHS.
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
        synth nesciunt you probably haven't heard of them accusamus labore VHS.
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
        synth nesciunt you probably haven't heard of them accusamus labore VHS.
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
        synth nesciunt you probably haven't heard of them accusamus labore VHS.
      `
    }
  }
}
</script>

<style>

</style>
