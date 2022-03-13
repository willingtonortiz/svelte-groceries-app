<script lang="ts">
  import MdEdit from 'svelte-icons/md/MdEdit.svelte';
  import MdChevronRight from 'svelte-icons/md/MdChevronRight.svelte';
  import TiShoppingBag from 'svelte-icons/ti/TiShoppingBag.svelte';
  import FaAddressCard from 'svelte-icons/fa/FaAddressCard.svelte';
  import MdLocationOn from 'svelte-icons/md/MdLocationOn.svelte';
  import MdCreditCard from 'svelte-icons/md/MdCreditCard.svelte';
  import FaTicketAlt from 'svelte-icons/fa/FaTicketAlt.svelte';
  import MdNotifications from 'svelte-icons/md/MdNotifications.svelte';
  import MdHelpOutline from 'svelte-icons/md/MdHelpOutline.svelte';
  import MdInfoOutline from 'svelte-icons/md/MdInfoOutline.svelte';
  import MdExitToApp from 'svelte-icons/md/MdExitToApp.svelte';

  import Divider from '../components/atoms/Divider.svelte';
  import ListItem from '../components/molecules/ListItem.svelte';
  import Page from '../components/molecules/Page.svelte';
  import Button from '../components/atoms/Button.svelte';
  import Spacer from '../components/atoms/Spacer.svelte';

  const profileImageUrl =
    'https://images.generated.photos/Qb3kIvu8z2CuD-jzbb20IHMmSybCPbye1x1A_zUeovs/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjY2NTYzLmpwZw.jpg';
</script>

<Page>
  <div slot="content" class="flex flex-col flex-nowrap">
    <div class="mx-4 my-8 flex flex-row flex-nowrap items-center">
      <div class="w-16 mr-4">
        <img src={profileImageUrl} alt="profile" class="rounded-3xl" />
      </div>

      <div class="flex flex-col flex-nowrap justify-between">
        <div class="flex flex-row flex-wrap items-center">
          <p class="font-bold text-xl">Afsar Hossen</p>

          <div class="w-4 ml-2 text-primary">
            <MdEdit />
          </div>
        </div>

        <p>Imshuvo97@gmail.com</p>
      </div>
    </div>

    <Divider />

    <ListItem>
      <div slot="left" class="w-6">
        <TiShoppingBag />
      </div>

      <p class="font-bold text-lg">Orders</p>

      <div slot="right" class="w-8">
        <MdChevronRight />
      </div>
    </ListItem>

    <Divider />

    <ListItem>
      <div slot="left" class="w-6">
        <FaAddressCard />
      </div>

      <p class="font-bold text-lg">My Details</p>

      <div slot="right" class="w-8">
        <MdChevronRight />
      </div>
    </ListItem>

    <Divider />

    <ListItem>
      <div slot="left" class="w-6">
        <MdLocationOn />
      </div>

      <p class="font-bold text-lg">Delivery Address</p>
      <div slot="right" class="w-8">
        <MdChevronRight />
      </div>
    </ListItem>

    <Divider />

    <ListItem>
      <div slot="left" class="w-6">
        <MdCreditCard />
      </div>

      <p class="font-bold text-lg">Payment Methods</p>
      <div slot="right" class="w-8">
        <MdChevronRight />
      </div>
    </ListItem>

    <Divider />

    <ListItem>
      <div slot="left" class="w-6">
        <FaTicketAlt />
      </div>

      <p class="font-bold text-lg">Promo Cord</p>
      <div slot="right" class="w-8">
        <MdChevronRight />
      </div>
    </ListItem>

    <Divider />

    <ListItem>
      <div slot="left" class="w-6">
        <MdNotifications />
      </div>

      <p class="font-bold text-lg">Notifications</p>
      <div slot="right" class="w-8">
        <MdChevronRight />
      </div>
    </ListItem>

    <Divider />

    <ListItem>
      <div slot="left" class="w-6">
        <MdHelpOutline />
      </div>

      <p class="font-bold text-lg">Help</p>
      <div slot="right" class="w-8">
        <MdChevronRight />
      </div>
    </ListItem>

    <Divider />

    <ListItem>
      <div slot="left" class="w-6">
        <MdInfoOutline />
      </div>

      <p class="font-bold text-lg">About</p>
      <div slot="right" class="w-8">
        <MdChevronRight />
      </div>
    </ListItem>

    <Divider />

    <Spacer />

    <Button class="m-4">
      <div slot="start" class="w-8">
        <MdExitToApp />
      </div>

      Log Out
    </Button>
  </div>
</Page>
