<template>
  <q-toolbar class="bg-grey-1" bordered>
    <div style="height: 30px">
      <router-link to="/">
        <q-img contain width="200px" height="28px" src="#" />
      </router-link>
    </div>
    <q-space />
    <q-tabs
      active-color="primary"
      narrow-indicator
      indicator-color="primary"
      v-model="tab"
      shrink
      inline-label
    >
      <template>
        <q-route-tab
          icon="dashboard"
          name="investment"
          label="Investments"
          to="/investments"
          exact
          no-caps
        />
        <q-route-tab
          icon="person"
          name="profile"
          label="Profile"
          to="/profile"
          exact
          no-caps
        />
      </template>
      <template>
        <q-route-tab
          icon="local_offer"
          name="dealCreate"
          label="Deal Creation"
          to="/deal-creation"
          exact
          no-caps
        />
        <q-route-tab
          icon="dashboard"
          name="investment"
          label="Investments"
          to="/investments"
          exact
          no-caps
        />
        <q-route-tab
          icon="person"
          name="profile"
          label="Profile"
          to="/profile"
          exact
          no-caps
        />
      </template>
      <q-tab icon="logout" name="logout" label="Logout" no-caps />
      <q-route-tab
        icon="lock"
        name="login"
        label="Login / Sign Up"
        to="/login"
        exact
        no-caps
      />
    </q-tabs>
  </q-toolbar>
</template>
